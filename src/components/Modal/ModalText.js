import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

export default function MarkdownText({text}) {
  const [post, setpost] = useState("");

  useEffect(() => {
    import(`../../constants/markdown/${text}.md`)
    .then((res) => {
      fetch(res.default)
      .then((res) => res.text())
      .then(res=>setpost(res))
      .catch(err=>console.log(err));
    })
    .catch(err=>console.log(err))
  });


  return (
    <div >
        <div><Markdown className='prose font-thin leading-tight prose-sm  text-justify '>{post}</Markdown></div>
    </div>
  )
}
