Specific features:
- The pagination returns batches of 50 pokemon, and allows users to share specific URLs for the results pages that will correctly rehydrate. 
- The same goes for specific pokemon detail pages: these URLs are also shareable. If a user adds an incorrect pokemon name to the end of the URL, they're shunted to a 404 page. 
- The specific pokemon details include additional API calls that return places and methods by which that Pokemon might be found, along with a tooltip showing more detail about specific pokemon abilities. 
- The pokemon are searchable, and when there's no result found, the user is alerted. 
- The appropriate navigation arrow is disabled when the user is at the end/beginning of the results pages. 


This was a good opportunity to get to grips with **Angular** and **Bootstrap**, both of which were new technologies for me. 

Angular felt busy to begin with, but I came to find the **separation of concerns** nice to work with once I got the hang of it. Knowing **React** put me in good stead, as there's lots of similarities conceptually between the two, even if the implementation is a little different. 

The **custom pipes** are great to use, they're similar to bits of code I'd usually tuck away in a 'utils' or 'helpers' file. And separating out API code into a specific service did, again, help keep things clear once I got into it. The file structure here got a little bloated here, so I would consider separating out the source file a bit more if I were to do it again. 

**Bootstrap** utilities were easy to get the hang of having worked previously with **Tailwind**. I did find myself adding **CSS** files for things like hover animations, but on the whole tried to keep styling to utilities and inline CSS to keep it more legible. 

**Lighthouse** scores are great for this app in terms of **best practices** and **accessibility** - I took a closer look at accessibility for this app, making sure to use native elements and labelling where useful, and **manual testing** for users using screen readers or tab navigation. **Performance** is another question entirely - I understand Angular is routinely criticised for this, but managed to inch it up a couple of points by using **Webp** images with specific sizing, and adding alternatives to the webfont I'm using here so it's faster on load. 