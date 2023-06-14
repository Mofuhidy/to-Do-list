import editTask from "../__mocks__/editTask";

describe('Test edit and complete status ', () => {

    test('Edit description ..', () => {
        // Arrange
    document.body.innerHTML = 
    `<section class="listCont">
        <div class="title">Today's To Do <i class="fa-solid fa-arrows-rotate refresh"></i></div>
        <div id="add">
            <input type="text" placeholder="Add to your list..." name="addDo" id="addDo">
            <i class="fa-solid fa-arrow-turn-down enter"></i>
        </div>
        <ul class="tasks-container">
        <li>Hello Remove testing</li>
        </ul>
        <div class="clearCont">
            <button class="clrBtn">Clear all completed</button>
        </div>
    </section>`;
    //Act - Call the edit function
    editTask();
    //Assert
    const list = document.querySelector('.tasks-container li').innerHTML;
    expect(list).toMatch('Matching test');
    })
});
