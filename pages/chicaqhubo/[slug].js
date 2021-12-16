import dbConnect from '../../lib/dbConnect'
import Profile from '../../models/Profile'

function Profile({ girlProfile }) {
  return (
    <>
      <h3>{girlProfile.name}</h3>
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  await dbConnect()

  /* find all the data in our database */
  const result = await Profile.find({})
  const girls = result.map((doc) => {
    const girl = doc.toObject()
    girl._id = girl._id.toString()
    return girl
  })

  // Get the paths we want to pre-render based on posts
  const paths = girls.map((girl) => ({
    params: { slug: girl.url },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://.../posts/${params.id}`)
  const post = await res.json()

  const girlProfile = await Profile.findOne({ url: params.slug })
  // const girls = result.map((doc) => {
  //   const girl = doc.toObject()
  //   girl._id = girl._id.toString()
  //   return girl
  // })

  // Pass post data to the page via props
  return { props: { girlProfile } }
}

export default Profile
