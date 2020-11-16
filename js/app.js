var popped = 0;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className == "balloon" &&  e.target.textContent != "POP!"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
                checkAllPopped();
    }   
});

function checkAllPopped(){
    if (popped === 16){
        console.log('all popped!');
        let gallery = document.querySelector('#balloons');
        let message = document.querySelector('#pop');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};
