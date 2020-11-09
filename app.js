$(document).ready(()=>{

    $.ajax({
        url: "https://www.reddit.com/r/worldnews/top.json?limit=10",
        method: 'GET',
        success: function(data){
            const {children} = data.data;

            $(children).each((i, postData)=>{
                const {title,permalink} = postData.data;
                const url = "https://www.reddit.com/" + permalink;
               
                const post = `<article class="card">
                    <p>${title} </p>
                    <a class="post-link" href="${url}">Link to Reddit</a>
                     </article>`;

                     $("#post-list").append(post);
            });
        }
    });

    $('#post-list').on({
        mouseenter: function(){
            $(this).css({"background-color" : " #12122e", "cursor": "pointer" , "transform": "translateY(-1rem)"})
            $(this).nextAll().css({"transform": "translateX(130px)"})
        },
        mouseleave: function(){
            $(this).css({"background-color": "#090916" , "transform": "translateY(0rem)"});
            $(this).nextAll().css({"transform": "translateX(0px)"});

        }
    },".card")



});