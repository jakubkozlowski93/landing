module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:300,400,500,600,700`, `Montserrat`, 'Nunito', 'Inter'],
        display: 'swap',
      },
    },
  ],
}
