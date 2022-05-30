let inpNewTask=$('#inpNewTask')
let btnAdd=$('#btnAdd')
let btnReset=$('#btnReset')
let btnSort=$('#btnSort')
let btnCleanup=$('#btnCleanup')
let ulTasks=$('#ulTasks')

function addItem(){
    let listItem=$('<li>',{
        'class':'list-group-item',
        text:inpNewTask.val()
    })
    listItem.click(()=>{
        listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val("")
    toggleBtns()
}
function clearTasks(){
    $('#ulTasks .done').remove()
    toggleBtns()
}
function sortTasks(){
    $('#ulTasks .done').appendTo(ulTasks)
}
function toggleBtns(){
    btnReset.prop('disabled',inpNewTask.val()=='')
    btnAdd.prop('disabled',inpNewTask.val()=='')
    btnSort.prop('disabled',ulTasks.children().length<1)
    btnCleanup.prop('disabled',ulTasks.children().length<1)
}
inpNewTask.keypress((event)=>{
    if(event.which==13){  //while entering
        addItem()
    }
})
inpNewTask.on('input',toggleBtns)
btnAdd.click(addItem)
btnReset.click(()=>{
    inpNewTask.val("")
    toggleBtns()
})
btnCleanup.click(clearTasks)
btnSort.click(sortTasks)