let inpNewTask=$('#inpNewTask')
let btnAdd=$('#btnAdd')
let btnReset=$('#btnReset')
let btnSort=$('#btnSort')
let btnCleanup=$('#btnCleanup')
let ulTasks=$('#ulTasks')

function addItem(){
    //an li item is created with inpNewTask value
    let listItem=$('<li>',{
        'class':'list-group-item',
        text:inpNewTask.val()
    })
    //the class "done" is toggled for the listItem when clicked
    listItem.click(()=>{
        listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val("")
    toggleBtns()
}
function clearTasks(){
    //the items with class "done" need to be deleted
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
//addItem is called when btnAdd is clicked
btnAdd.click(addItem)
//inpNewTask takes up an empty string when btnReset is clicked
btnReset.click(()=>{
    inpNewTask.val("")
    toggleBtns()
})
//the done tasks are cleared when btnCleanup is clicked
btnCleanup.click(clearTasks)
//the done tasks are sorted
btnSort.click(sortTasks)