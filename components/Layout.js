import React from 'react'
import Head from 'next/Head'
export default function Layout({title, children}) {
  return (
    <div style={{
      backgroundImage :'url("https://wallpaper.dog/large/10798799.jpg" )'
    

    }}>
       <Head>
        <title>{title}</title>
        <link rel="icon" href="/ favicon.ico"/>
        </Head> 
        <main className="container mx-auto max-w-xl pt-8 min-h-screen">
            {children}
        </main>
    </div>
  )
}
