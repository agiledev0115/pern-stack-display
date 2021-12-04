const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes/projects.routes');

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.use((err, req, res, next) => {
	return res.status(500).json({
		status: 'error',
		message: err.message,
	});
});

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));
