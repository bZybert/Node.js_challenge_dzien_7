// Twój kod
$(function () {
    let new_todo = $('.new-todo');
    let main_section = $('section.main')
    let footer = $('.footer')
    let ul_todo = $('.todo-list')
    let btn = $('button.destroy')
    let checkedAll = $('.toggle-all')
    let spanCount = $('span.todo-count')
    let btnClear = $('button.clear-completed')

    console.log(new_todo)

    new_todo.on('change', (e) => {
        console.log("works")
        let add_todo = $(
            `<li>
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label>${e.target.value}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            </li>`
        )

        $(ul_todo).prepend(add_todo)
        main_section.removeClass('hidden')
        footer.removeClass('hidden')

        let btn = $('button.destroy')
        btn.on('click', (e) => {
            $(e.target).parent().parent().remove()
        })

        let lab = $('input.toggle')
        lab.on('change', e => {
            $(e.target).parent().parent().toggleClass("completed");
        })

    })

    checkedAll.on("change", () => {
        let inpCheck = $(ul_todo).find('input.toggle').click()

        //let liCompl = $(ul_todo).find('li').toggleClass("completed");


    })

    btnClear.on('click', (e) => {
        console.log('delete all checked')
        let inp = $(ul_todo).find('input.toggle')
        if (inp.prop('checked')) {
            //inp.remove()
        }

    })



});