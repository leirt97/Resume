$(function(){
    $('.container').on('click', (e) => {
        let html = $(e.target).attr('data-html')
        window.location.href = './html/'+html+'.html'
    })
})
