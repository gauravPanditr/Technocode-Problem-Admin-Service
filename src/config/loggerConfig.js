const winston = require("winston");
const { LOG_DB_URL } = require("./serverConfig");
require("winston-mongodb");
const allowedTransport = [];

allowedTransport.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple(),
      winston.format.timestamp({
        format: "YYYY -MM-DD HH:mm:ss",
      }),
      winston.format.printf(
        (log) => `${log.timestamp} [${log.level}]: ${log.message}`
      )
    ),
  })
);

//logging config in database
allowedTransport.push(
  new winston.transports.MongoDB({
    level: "error",
    db: LOG_DB_URL,
    collection: "logs",
    
  })
);

allowedTransport.push(
      new winston.transports.File({
            filename:'app.logs'

      })

)

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY -MM-DD HH:mm:ss",
    }),
    winston.format.printf(
      (log) => `${log.timestamp} [${log.level}]: ${log.message}`
    )
  ),
  transports: allowedTransport,
});

module.exports = logger;
