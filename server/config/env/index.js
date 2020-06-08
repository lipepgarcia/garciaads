module.exports = {
    env: 'development',
    nomeApi: 'helloworld',
    urlApi: 'https://engenhariasoftware2.herokuapp.com/',
    portApi: process.env.PORT || 3000,
    dataConfig: {
      MYSQL: {
        database: 'hdf54qn0147lyd3v',
        host: 'qf5dic2wzyjf1x5x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        port: '3306',
        user: 'c6agdu4zu6ltug7a',
        password: 'nyvwkjni224t02ne'
      }
    }
  };