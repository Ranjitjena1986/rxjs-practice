import {Observable} from "rxjs";
import { share } from 'rxjs/operators';

var  ctr = 0;
var observable = Observable.create((observer:any) => {
    try {
        observer.next('Hey guys!')
        observer.next('How are you?')
        setInterval(() => {   
            ctr++   
            observer.next(`I am good - ${ctr}`)
        }, 2000)
    } catch (err) {
        observer.error(err)
    }
}).pipe(share())

setTimeout(() => {
    subscription.unsubscribe();
}, 10001);

const subscription = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
);

const subscription2 = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
);

subscription.add(subscription2);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}