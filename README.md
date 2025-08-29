# Emergency-Hotline
Ans:
1.
getElementById()-> we use this when we want to get only one element from html since id's are generally unique
returns the specified object.

getElementByClassName()->we use this when we want to get a group of elements, since classes are generally shared by multiple elements,returns htmlcollection.

document.querySelector()->gets the first element that matches a css selector,it can used by id,class,attribute and nesting,returns the specified object.

document.querySelectorAll()->gets all the element that matches a css selector,it can used by id,class,attribute and nesting, returns nodelist.


2.

<script>
const pp=document.createElement("p");

pp.textContent="Dummy2";

document.getElementById("container").appendChild(pp);

</script>
</body>


3.
a event happens when you click something,this is called target, then the even moves upward starting any event listner on the parent element its called bubbling




4.
we add an event listener to the parent container. and when an event occurs on a child it bubbles up, them we check which child triggered the event

its useful because it works even for the elements added after the page loads, and we need fewer events


5.

->preventDefault() prevents default action of an element from happening


->stopPropagation() stops the event from bubbling in the dom