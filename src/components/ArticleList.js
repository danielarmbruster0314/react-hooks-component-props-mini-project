import React from "react";
import Article from "./Article"


function ArticleList({ posts }){
    
    const article = posts.map((p) => (
        <Article
        key={p.id}
        title={p.title}
        date={p.date}
        preview={p.preview}
        minutes={p.minutes}
        />
    ))
    
    
    return(
        <main>
            {article}
        </main>
    )
}

export default ArticleList
