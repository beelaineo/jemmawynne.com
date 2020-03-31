import * as React from 'react'
import {
  wrapperStyles,
  imageStyles,
  textWrapperStyles,
  titleStyles,
  subtitleStyles,
} from './styles'
import { Loading } from './Loading'

export class BlockPreview extends React.Component {
  state = {
    title: '',
    src: undefined,
    subtitles: [],
    loading: true,
  }

  componentDidMount() {
    this.fetchValues()
  }

  componentWillReceiveProps(nextProps) {
    this.fetchValues(nextProps)
  }

  fetchValues = async (props = this.props) => {
    if (!props.getPreviewValues) return
    const values = await props.getPreviewValues(props.value)
    this.setState({
      ...values,
      loading: false,
    })
  }

  render() {
    const { src, title, subtitles, loading } = this.state
    return (
      <div style={wrapperStyles}>
        {loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            {src && <img style={imageStyles} src={src} alt={title} />}
            <div style={textWrapperStyles}>
              <p style={titleStyles}>{title}</p>
              {subtitles && subtitles.length
                ? subtitles.slice(0, 2).map((subtitle) => (
                    <h3
                      className="DefaultPreview_subtitle_3ARTa"
                      key={subtitle}
                      style={subtitleStyles}
                    >
                      {subtitle}
                    </h3>
                  ))
                : null}
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}
