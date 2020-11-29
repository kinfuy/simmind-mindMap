/* eslint-disable no-unused-vars */
const transverseInterval = 400;
const longitudinalSeparation = 100;
let degree = 1;
function getNodeSelfPosition(position, index, length, degree) {
    if (length === 1) {
        return {
            X: position.X + transverseInterval * degree,
            Y: position.Y,
        };
    }
    if (length / 2 > index) {
        return {
            X: position.X + transverseInterval,
            Y: position.Y - Math.ceil(index / 2) * longitudinalSeparation,
        };
    } else {
        return {
            X: position.X + transverseInterval,
            Y: position.Y + Math.ceil(index / 2) * longitudinalSeparation,
        };
    }
}
function reSetTree(node) {
    let parent = node;
    if (parent.children) {
        degree++;
        parent.children.forEach((element, i) => {
            let self = getNodeSelfPosition(
                parent.position.self,
                i,
                parent.children.length,
                degree
            );
            element.position = {
                parent: parent.position.self,
                self: self,
            };
            if (element.children) {
                reSetTree(element);
            }
        });
    }
}
function sortTree(tree) {
    degree = 1;
    reSetTree(tree);
    console.log(tree);
    return tree;
}
export { sortTree };
