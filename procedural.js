// Write a procedure, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
// Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.
// Modify the previous algorithm if you use a dot_product function instead of a procedure.

function dot_product(v1, v2) {
  let ps = 0;
  for (i = 0; i < v1.length; i++) {
    L1 = v1[i];
    for (x = 0; x < v2.length; x++) {
      L2 = v2[x];
    }
  }
  ps += L1 * L2;

  if (ps === 0) {
    console.log("The dot product is " + ps + " and it is Orthogonal");
  } else {
    console.log("The dot product is equals to " + ps);
  }
}

dot_product([3], [7]);
dot_product([5, 0], [0, 9]);
