let zero = document.querySelector("#zero");
        zero.addEventListener("click", function () {

            let entre = document.querySelector("#display");
            entre.value += 0;

        });
        let un = document.querySelector("#un");
        un.addEventListener("click", function () {

            let entre = document.querySelector("#display");
            entre.value += 1;

        });
        let deux = document.querySelector("#deux");
        deux.addEventListener("click", function () {

            let entre = document.querySelector("#display");
            entre.value += 2;

        })
        let trois = document.querySelector("#trois");
        trois.addEventListener("click", function () {

            let entre = document.querySelector("#display");
            entre.value += 3;

        })
        let quatre = document.querySelector("#quatre");
        quatre.addEventListener("click", function () {

            let entre = document.querySelector("#display");
            entre.value += 4;

        });
        let cinq = document.querySelector("#cinq");
        cinq.addEventListener("click", function () {

            let entre = document.querySelector("#display");
            entre.value += 5;

        })
        let six = document.querySelector("#six");
        six.addEventListener("click", function () {

            let entre = document.querySelector("#display");
            entre.value += 6;

        })
        let sept = document.querySelector("#sept");
        sept.addEventListener("click", function () {

            let entre = document.querySelector("#display");
            entre.value += 7;

        })
        let huit = document.querySelector("#huit");
        huit.addEventListener("click", function () {

            let entre = document.querySelector("#display");
            entre.value += 8;

        })
        let neuf = document.querySelector("#neuf");
        neuf.addEventListener("click", function () {

            let entre = document.querySelector("#display");
            entre.value += 9;

        })
        let multi = document.querySelector("#multi");
        multi.addEventListener("click", function () {

            let entre = document.querySelector("#display");
            entre.value += "*";

        })
        let divi = document.querySelector("#divi");
        divi.addEventListener("click", function () {

            let entre = document.querySelector("#display");
            entre.value += "/";
            
        })
        let moins = document.querySelector("#moins");
        moins.addEventListener("click", function () {

            let entre = document.querySelector("#display");
            entre.value += "-";

        })
        let add = document.querySelector("#add");
        add.addEventListener("click", function () {

            let entre = document.querySelector("#display");
            entre.value += "+";

        })
        let clears = document.querySelector("#clears");
        clears.addEventListener("click", function () {
            let entre = document.querySelector("#display");
            entre.value = "";
        })
        let virgule = document.querySelector("#virgule");
        virgule.addEventListener("click", function () {
            let entre = document.querySelector("#display");
            entre.value += ".";
        })
        let ferme = document.querySelector("#ferme");
        ferme.addEventListener("click", function () {
            let entre = document.querySelector("#display");
            entre.value += ")";
        })
        let ouvert = document.querySelector("#ouvert");
        ouvert.addEventListener("click", function () {
            let entre = document.querySelector("#display");
            entre.value += "(";
            console.log( entre.value)
        })
        let egal = document.querySelector("#egal");
        egal.addEventListener("click", function () {
            let entre = document.querySelector("#display");
            entre.value = eval(entre.value);
            
           
        })
         let effacer = document.querySelector("#effacer");
        effacer.addEventListener("click", function () {
            let entre = document.querySelector("#display").value;
            document.querySelector("#display").value = entre.substring(0, entre.length - 1);
           
            
            console.log( entre )
        })
         let loga = document.querySelector("#loga");
        loga.addEventListener("click", function () {
            let x;
           
            let entre = document.querySelector("#display");
             x=eval(entre.value);
             entre.value=Math.log(x);
            
            console.log(entre.value  )
        })
         let racine = document.querySelector("#racine");
        racine.addEventListener("click", function () {
            let x;
           
            let entre = document.querySelector("#display");
             x=eval(entre.value);
             entre.value=Math.sqrt(x);
            
            console.log(entre.value  )
        })
         let carre = document.querySelector("#carre");
        carre.addEventListener("click", function () {
            let x;
           
            let entre = document.querySelector("#display");
             x=eval(entre.value);
             entre.value=Math.pow(x, 2);
            
            console.log(entre.value  )
        }); 

        window.addEventListener("error", (e)=>{
        alert("une erreur est survenue");
       })
