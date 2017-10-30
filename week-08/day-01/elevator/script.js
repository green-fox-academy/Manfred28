'use strict';

class ElevatorController {
    constructor () {
        this.model = new ElevatorModel(10, 10);
        this.view = new ElevatorView(this.model.maxFloor)
        this.addControlEventListener(this.view.peopleControlButtons, this.model.addPeople.bind(this.model));
        this.addControlEventListener(this.view.floorControlButtons, this.model.moveElevator.bind(this.model));
        this.view.update(this.model.position)
    }

    addControlEventListener (buttons, fn) {
        let changeActiveFloor = this.changeActiveFloor.bind(this)
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                fn(parseInt(button.value))
                this.view.update(this.model.position)
            })
        })
    }
}


class ElevatorModel {
    constructor (maxFloor, maxPeople) {
        this.maxFloor = maxFloor;
        this.maxPeople = maxPeople;
        this.position = 9;
        this.people = 0;
        this.direction = 'up';
    }

    moveElevator (num) {
        if (this.position + num >= 0 && this.position + num <= 9) {
            this.position += num;
        }
    }

    addPeople (num) {
        if (this.people + num >= 0 && !this.isPeopleBeyondMax()) {
            this.people += num;
        }
    }

    isFloorBeyondMax () {
        return this.position > this.maxFloor - 1;
    }

    isPeopleBeyondMax () {
        return this.people > this.maxPeople - 1;
    }
}


class ElevatorView {
    constructor (floorCount) {
        this.drawFloors(floorCount);
        this.$floors = document.querySelectorAll('.elevator-levels > div')
        this.peopleControlButtons = document.querySelectorAll('.people-control > button');
        this.floorControlButtons = document.querySelectorAll('.level-control > button');
    }

    drawFloors (floorCount) {
        const $floorContainer = document.querySelector('.elevator-levels')
        for (let i = 0; i < floorCount; i++) {
            $floorContainer.appendChild(document.createElement('div'));
        }
    }

    update (index) {
        this.$floors.forEach(function(floor) {
            floor.classList.remove('current-elevator')
        })
        this.$floors[index].classList.add('current-elevator')
        console.log(this.$floors);
    }
}

const elevator = new ElevatorController();



