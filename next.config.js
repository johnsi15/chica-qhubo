module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/chicaqhubo',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}
