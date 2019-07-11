const mysql = require('mysql')
class Database {
	connection: any
	constructor(config) {
		this.connection = mysql.createConnection(config)
	}
	query(sql, args) {
		return new Promise((resolve, reject) => {
			this.connection.query(sql, args, (err, rows) => {
				if (err) return reject(err)
				resolve(rows)
			})
		})
	}
	close() {
		return new Promise((resolve, reject) => {
			this.connection.end((err) => {
				if (err) return reject(err)
				resolve()
			})
		})
	}
}

export const db = new Database({
	host: 'localhost',
	user: 'jemma',
	password: 'wynne',
	database: 'jw_migrate',
})

export const format = (strings, ...values) =>
	strings
		.map((s, index) =>
			index < values.length ? `${s}${mysql.escape(values[index])}` : s,
		)
		.join('')
