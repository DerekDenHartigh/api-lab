"use strict";
/*To Do:

Task:  Create a webpage that displays the posts from the AWW Subreddit.
Build Speciﬁcations:

1. Use jQuery to request data from the  https://www.reddit.com/r/aww/.json  API.  
2. Display the results on the page.  
3. At a minimum, include a title, image and working link for each post. 
    (Easiest is to use the  thumbnail for the image, but there are other images in the JSON response.)
4. Make it look good with some CSS.  (good is a relative term...)
    Bonus  Only show the ﬁrst ten results.  

My Notes:
    this project is done, but the styling on the appended elements isn't working, and I'm not sure why.
*/
$(()=>{
    $.get("https://www.reddit.com/r/aww/new.json", (data)=>{
        console.log(data);
        let title, thumb, link;
        let child = data.data.children;
        let n=0;
        while (n<10){ // this is for the bonus - limiting it to 10 posts
            child = data.data.children[n];
            title = child.data.title;
            thumb = child.data.thumbnail;
            link = child.data.permalink;
            console.log(child);
            $("body").append(`<h1>${title}</h1>`)
                .css("background-color", `#${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`)
                .css("color", `#${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`);
                // I was trying to do random colors for each post, but it seems to do it for all.

                $("body").append(`<img src="${thumb}" width="300px" height="300px"/>`);
                $("body").append(`<a href="https://reddit.com${link}">Click Here for OP</a>`);
            n++;
        };
    });
    //     data.data.children.forEach((child)=> {
    //         // while(n<10){
    //         //     title = child[0].data.title;
    //         //     thumb = child[0].data.thumbnail;
    //         //     console.log(title);
    //         //     console.log(thumb);
    //         //     $("body").append(`<h1>${title}</h1>`);
    //         //     $("#img-box").append(`<img src="${thumb}" width="300px" height="300px"/>`);
    //         //     n++;
    //         // }
    //             console.log(child);
    //             title = child.data.title;
    //             thumb = child.data.thumbnail;
    //             link = child.data.permalink;  // r/aww/...
    //             console.log(link);
    //             $("body").append(`<h1>${title}</h1>`)
    //             .css("background-color", `#${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`)
    //             .css("color", `#${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`);
    //             // I was trying to do random colors for each post, but it seems to do it for all.

    //             $("body").append(`<img src="${thumb}" width="300px" height="300px"/>`);
    //             $("body").append(`<a href="https://reddit.com${link}">Click Here for OP</a>`);
    //     });
    // });
/* I thought this would allow me to jQuery style my appended elements, but to no avail
    $(function(){
        $("h1").on("mouse-enter",function(){
            $(this)
            .css("background-color", `#${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`)
            .css("color", `#${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`);
        });
    });

    $(function(){
        $("h1").on("mouse-exit",function(){
            $(this)
            .css("background-color", "white")
            .css("color", "black");
        });
    });
*/

    $("h1").hover(
        function(){
            $(this)
            .css("background-color", `#${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`)
            .css("color", `#${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`);
        }, function(){
            $(this)
            .css("background-color", "white")
            .css("color", "black");
        }
    );

    $("img").hover(
        function(){
            $(this)
            .css("cursor", "zoom-in")
            .css("width", "1000px")
            .css("height", "1000px");
        }, function(){
            $(this)
            .css("cursor", "default")
            .css("width", "300px")
            .css("height", "300px");
        }
    );
});