var contador = 0
var selectOpt = 0

function addToList () {
  var action = document.querySelector('#action_select').value
  var description = document.querySelector('.input_description').value
  var title = document.querySelector('.input_title_desc').value
  var date = document.getElementById('date_select').value

  switch (action) {
    case 'SHOPPING':
      selectOpt = 0
      break
    case 'WORK':
      selectOpt = 1
      break
    case 'SPORT':
      selectOpt = 2
      break
    case 'MUSIC':
      selectOpt = 3
      break
  }

  var classLi = ['list_shopping list_dsp_none', 'list_work list_dsp_none', 'list_sport list_dsp_none', 'list_music list_dsp_none']

  var cont = '<div class="col_md_1_list">    <p>' + action + '</p>    </div> <div class="col_md_2_list"> <h4>' + title + '</h4> <p>' + description + '</p> </div>    <div class="col_md_3_list"> <div class="cont_text_date"> <p>' + date + '</p>  </div>  <div class="cont_btns_options">    <ul>  <li><a href="#finish" onclick="finishAction(' + selectOpt + ',' + contador + ');" ><i class="material-icons"></i></a></li>   </ul>  </div>    </div>'

  var li = document.createElement('li')
  li.className = classLi[selectOpt] + ' li_num_' + contador

  li.innerHTML = cont
  document.querySelectorAll('.cont_princ_lists > ul')[0].appendChild(li)

  setTimeout(function () {
    document.querySelector('.li_num_' + contador).style.display = 'block'
  }, 100)

  setTimeout(function () {
    document.querySelector('.li_num_' + contador).className = 'list_dsp_true ' + classLi[selectOpt] + ' li_num_' + contador
    contador++
  }, 200)
}

// function finishAction (num, num2) {
//   var classLi = ['list_shopping list_dsp_true', 'list_work  list_dsp_true', 'list_sport list_dsp_true', 'list_music list_dsp_true'];
//   console.log('.li_num_' + num2);
//   document.querySelector('.li_num_' + num2).className = classLi[num] + ' list_finish_state'
//   setTimeout(function () {
//     delFinish()
//   }, 500)
// }

function delFinish () {
  var li = document.querySelectorAll('.list_finish_state')
  for (var e = 0; e < li.length; e++) {
    /* li[e].style.left = "-100px"; */
    li[e].style.opacity = '0'
    li[e].style.height = '0px'
    li[e].style.margin = '0px'
  }

  setTimeout(function () {
    var li = document.querySelectorAll('.list_finish_state')
    for (var e = 0; e < li.length; e++) {
      li[e].parentNode.removeChild(li[e])
    }
  }, 500)
}

var t = 0
function addNew () {
  if (t % 2 === 0) {
    document.querySelector('.cont_crear_new').className = 'cont_crear_new cont_crear_new_active'

    document.querySelector('.cont_add_titulo_cont').className = 'cont_add_titulo_cont cont_add_titulo_cont_active'
    t++
  } else {
    document.querySelector('.cont_crear_new').className = 'cont_crear_new'
    document.querySelector('.cont_add_titulo_cont').className = 'cont_add_titulo_cont'
    t++
  }
}
