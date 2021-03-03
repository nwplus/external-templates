export default async (req, res) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  // if (req.query.secret !== process.env.NEXT_PREVIEW_TOKEN) {
  //   return res.status(401).json({ message: 'Invalid token' })
  // }

  // Enable Preview Mode by setting the cookies
  // If you request a page which has getStaticProps with the preview mode cookies set (via res.setPreviewData),
  // then getStaticProps will be called at request time (instead of at build time).
  res.setPreviewData({})
  console.log("just called setpreviewdata")

  // makes the assumption that all external sites are single page and have a "/" route
  res.redirect("/")
}