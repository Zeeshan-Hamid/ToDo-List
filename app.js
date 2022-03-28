           var body = document.querySelector('body');
           var form = document.querySelector('form');
            var input = document.querySelector('#input');
            var submit = document.querySelector('#submit');
            var list  = document.querySelector('ol');
            var del = document.querySelector('#del');
            var lis = document.querySelector('li');
           
            const del_all =(newList) =>{
                const del = document.createElement('button');
                del.classList.add('ini');
                del.value = "Delete All";
                body.append(del);
                del.addEventListener('click', function(){
                    newList.remove();
                    return;
                })
            }

            const li_create = () =>{
                return document.createElement('li');
            }

           

            form.addEventListener('submit', function(e){
                e.preventDefault();
                
                todo();
                input.value ="";
            })

            const todo = () => {
                if(input.value===""){
                    alert("Enter value");
                } else if(input.value==="EXIT" || input.value === "exit"){
                    alert('Okay! Exiting');
                    return;
                }
                else{
                 const newList = li_create();
                const deleteBtn = document.createElement('button');
                deleteBtn.classList.add('btn_del');
                const newLine = document.createElement('br');
                deleteBtn.textContent = "Delete";
                const value = input.value;
                newList.textContent = value;
                list.append(newList);
                newList.append(newLine, deleteBtn);
                //del_all(newList);
                
            }
        }
            

            list.addEventListener('click', function(e){
               
                if(e.target.nodeName == 'BUTTON'){
                    e.target.closest('LI').remove();
                }
            })


            const arr = ["Orange", "red", "green", "Blue", "Purple"];
            const span = document.querySelector('.span');
            const btn_rand = document.querySelector('.btn_rand');
           
            
            btn_rand.addEventListener('click', function(){
                function rand() {
                    return Math.floor(Math.random() * arr.length);
                  }
                const rnd = rand();
              
             console.log(rnd);
              body.style.backgroundColor = arr[rnd];
              console.log(rnd);
              span.textContent = arr[rnd];
              console.log(rnd);
              
            })   

            
           