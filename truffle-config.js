module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host:"ec2-34-223-48-94.us-west-2.compute.amazonaws.com",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
}
