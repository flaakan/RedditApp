$(document).ready(()=>{

    $.ajax({
        url: "https://www.reddit.com/r/worldnews/top.json?limit=10",
        method: 'GET',
        success: function(data){
            const {children} = data.data;

            $(children).each((i, postData)=>{
                const {title,permalink} = postData.data;
                const url = "https://www.reddit.com/" + permalink;
               
                const post = `<div class="card">
                    <p>${title} </p>
                    <a href="${url}">Link to Reddit</a>
                     </div>`;

                     $("#post-list").append(post);
            });
        }
    });

    $('#post-list').on({
        mouseenter: function(){
            $(this).css({"background-color" : "red", "cursor": "pointer"})
        },
        mouseleave: function(){
            $(this).css("background-color", "#fff")
        }
    },".card")



});