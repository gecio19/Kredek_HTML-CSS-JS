
//#region  Cookies/buttonsfunctionality/ONload
function onload()
{

    var allExercieses = document.cookie.split(";");

    if(allExercieses != '')
    {
    allExercieses.forEach(element=>
        {
            startDisplay(element.split('=')[0], element.split('=')[1])
            console.log(element);

        })
    }
}


function startDisplay(exercise, onvalue)
{
    var bTabel = document.getElementById("ex_tbody");
    result = bTabel.innerHTML;
    console.log(onvalue);
    if(onvalue === "0")
    {
        result += '<tr>' +
        '<td>' + exercise + '</td>'+
          '<td>' +
                 '<div class="form-check form-switch">'+
                     ' <input  class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onchange="changState(this)" '+ 'on="' + onvalue+'"  > '+
                 '</div>'+
             '</td>'+
             '<td>'+
                 '<button type="button" class="btn btn-danger" onclick="giveup(this)">Zrezygnuj</button>'+
             '</td>'+
       '</tr>'
       bTabel.innerHTML = result
    }
    else
    {
        result += '<tr>' +
        '<td>' + exercise + '</td>'+
          '<td>' +
                 '<div class="form-check form-switch">'+
                     ' <input  class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onchange="changState(this)" '+ 'on="' + onvalue+'" checked > '+
                 '</div>'+
             '</td>'+
             '<td>'+
                 '<button type="button" class="btn btn-danger" onclick="giveup(this)">Zrezygnuj</button>'+
             '</td>'+
       '</tr>'
       bTabel.innerHTML = result

    }
}
function changState(element)
{
    var exercise = element.parentElement.parentElement.parentElement.children[0].innerHTML;
    document.cookie = exercise + "=" + changHTMLState(element);

}


function changHTMLState(element)
{
    if(element.getAttribute("on") == '0')
        {
        element.setAttribute("on",'1')
        }   
    else
        {
            element.setAttribute("on",'0')
        }
    
    return element.getAttribute("on");
}



function drawexercise()
{
    rolllApi()
    .then(response => Display(response));
}

function saveCookies(cookie)
{
    var nazwa =  cookie.activity + "=" +  '0';
    document.cookie = nazwa;
    console.log(document.cookie);
}


function rolllApi()
{
    return fetch('https://www.boredapi.com/api/activity/')
    .then(response => response.json())
}

function Display(data)
{
    var bTabel = document.getElementById("ex_tbody");
    saveCookies(data);

    result = bTabel.innerHTML;
    result += '<tr>' +
   '<td>' + data.activity+  '</td>'+
     '<td>' +
            '<div class="form-check form-switch">'+
                ' <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onchange="changState(this)" on="0"  > '+
            '</div>'+
        '</td>'+
        '<td>'+
            '<button type="button" class="btn btn-danger" onclick="giveup(this)">Zrezygnuj</button>'+
        '</td>'+
  '</tr>'
  bTabel.innerHTML = result
}
function giveup(element)
{
    let delElem = element.parentElement.parentElement.children[0].innerHTML;
    let isDone = element.parentElement.parentElement.children[1].children[0].children[0].getAttribute("on");

    document.cookie = delElem + "=" + isDone+ ";expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    element.parentElement.parentElement.remove();
}

//#endregion








