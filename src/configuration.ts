export default function loadConfiguration() {
  return {
    mongo: {
      uri: process.env.MONGO_URI,
    },
  }
}
