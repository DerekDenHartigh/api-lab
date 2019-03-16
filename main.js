"use strict";
$(()=>{
    $.get("https://www.reddit.com/r/aww/new.json", (data)=>{
        console.log(data);

        // let i=0;  // don't work
        // while (data.data.children[i]<=10) {
        //     title = child[i].data.title;
        //     thumb = child[i].data.thumbnail;
        //     $("body").append(`<h1>${title}</h1>`);
        //     $("body").append(`<img src="${thumb}"/>`);
        //     i++;
        // }

        let title, thumb, gif;
        let child = data.data.children;
        let n=0; 
        data.data.children.forEach((child)=> { // log ALL the titles
            title = child.data.title;
            thumb = child.data.thumbnail;
            $("body").append(`<h1>${title}</h1>`);
            $("#img-box").append(`<img src="${thumb}" width="300px" height="300px"/>`);
            n++;
            if (n=10){return;} // doesn't break out - runs it all asynch
        });
    }
)});