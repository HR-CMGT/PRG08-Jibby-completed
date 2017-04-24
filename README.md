# PRG08-Week3-oefening1

## Startcode

- De car class bevat methods en statements voor drie soorten gedrag: `driving()`, `jumping()`, `crashing()`
- De car heeft een property `state` en een `switch` block waarmee je van gedrag kan wisselen.

## Opdracht

- Verwijder de `state` property en alle code die het gedrag beschrijft of checked.
- Plaats alle gedrag code in drie strategy classes. 
- De car krijgt in de constructor als eerste het 'driving' gedrag.
- Plaats een keyboard listener in de 'driving' class. Na een keypress verandert het gedrag in 'jumping'.
- Tijdens 'jumping' is er geen listener. Als de jump is afgelopen ga je automatisch naar 'crashing'.
- Het crashing gedrag heeft een listener die weer terug springt naar 'driving'.
- De constructor van driving zet de snelheid, positie en de wielen van de auto in de beginstand.

## Strategy Pattern Voorbeeld

```

class Person {
    private myBehavior:Behavior;
    constructor(){
        this.myBehavior = new Behavior(this);
        this.myBehavior.doSomething();
    }
}

class Jump implements Behavior {
    public person : Person;
    constructor(p:Person){
        this.person = p;
    }
    public doSomething(){
        console.log("I am doing something!");
    }
}

interface Behavior {
    person:Person;
    doSomething() : void;
}
```

### Event Listeners toevoegen en verwijderen

```
class Test {
    private callback:EventListener;

    constructor(){
        // we slaan de functie op in een variabele
        this.callback = (e:KeyboardEvent) => this.keyWasPressed(e);

        // listener toevoegen
        window.addEventListener("keydown", this.callback);
    }

    private keyWasPressed(e:KeyboardEvent):void {
        // omdat de functie in een variabele zit kan je removeEventListener doen
        window.removeEventListener("keydown", this.callback);
    }
}
```
