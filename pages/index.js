
export default function Home({posts}) {

console.log({posts});

  return (
<div>
  <h1>Hello from the home page!</h1>
  {
    posts.nodes.map(post => {
      return(
        <ul key={post.slug}>
          <li>{post.title}</li>
        </ul>
      )
    }
      )
  }
</div>
  )
}

export async function getStaticProps(){

  const res = await fetch('http://test.local/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          query: `
          query HomepageQuery {
            posts {
              nodes {
                slug
                title
              }
            }
          }
          `,
      })
  })

  const json = await res.json()

  return {
    props: {
        posts: json.data.posts,
    },
  }

}


