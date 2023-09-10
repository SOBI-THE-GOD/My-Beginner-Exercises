let toDoListArr = [
    { id: 1, name: "coding", idDone: true },
    { id: 2, name: "workout", isDone: false },
    { id: 3, name: "play the game", isDone: true },
];

let toDoId = toDoListArr.length;

let userAnswer = 1;

while (userAnswer === 1) {
    userAnswer = +prompt(
        "do you want to edit your toDo list ? \n 1. yes \n 2. no"
    );

    if (userAnswer === 1) {
        let userAsked = +prompt(
            '1. add a new toDo . \n2. remove a toDo . \n3. change the status of toDo to "isDone" .'
        );

        switch (userAsked) {
            case 1:
                toDoId++;
                let toDoName = prompt("Enter the name of toDo");
                toDoListArr.push({ id: toDoId, name: toDoName, isDone: false });
                alert(
                    'your toDo with "' +
                        toDoName +
                        '" name is added to the list :)'
                );
                break;

            case 2:
                let toRemoveName = prompt(
                    "Enter the name of that toDo to remove"
                );
                toRemoveName = toRemoveName.toLowerCase();
                let isToDoAvalaible = toDoListArr.some(
                    (toDo) => toDo.name === toRemoveName
                );
                if (isToDoAvalaible) {
                    let toDoIndex = toDoListArr.findIndex(
                        (toDo) => toDo.name === toRemoveName
                    );
                    toDoListArr.splice(toDoIndex, 1);
                    alert(
                        'toDo with "' +
                            toRemoveName +
                            '" name is removed from the list :)'
                    );
                } else {
                    alert(
                        'toDo with "' +
                            toRemoveName +
                            '" name is not defined :('
                    );
                }
                break;

            case 3:
                let toChangeStatusName = prompt(
                    'Enter the name of that toDo that you want to change the status to "isDone"'
                );
                toChangeStatusName = toChangeStatusName.toLowerCase();
                let isToDoAvailable = toDoListArr.some(
                    (toDo) => toDo.name === toChangeStatusName
                );
                if (isToDoAvailable) {
                    let toDoIndex = toDoListArr.findIndex(
                        (toDo) => toDo.name === toChangeStatusName
                    );
                    toDoListArr[toDoIndex].isDone = true;
                    alert(
                        'toDo with "' +
                            toChangeStatusName +
                            '" name status is changed to isDone'
                    );
                } else {
                    alert(
                        'toDo with "' +
                            toChangeStatusName +
                            '" name is not defined :('
                    );
                }
                break;

            default:
                alert("Entered option is not defined :(");

                break;
        }
    } else {
        alert("ok have fun with your toDo list :)");
    }
}
console.log(toDoListArr);
