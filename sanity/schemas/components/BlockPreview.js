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
    const {
      src,
      title: mainTitle,
      subtitles: mainSubtitles,
      loading,
    } = this.state
    const st = mainSubtitles || []
    const titles = [mainTitle, ...st].filter(Boolean)
    const title = titles[0]

    const subtitles = titles.slice(1)
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
                    <h4
                      className="DefaultPreview_subtitle_3ARTa"
                      key={subtitle}
                      style={subtitleStyles}
                    >
                      {subtitle}
                    </h4>
                  ))
                : null}
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}
