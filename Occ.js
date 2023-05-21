
function binarySearch(arr, l, r, x)
{
	if (r < l)
		return -1;

	var mid = l + parseInt((r - l) / 2);

	// If the element is present at the middle
	// itself
	if (arr[mid] == x)
		return mid;

	// If element is smaller than mid, then
	// it can only be present in left subarray
	if (arr[mid] > x)
		return binarySearch(arr, l, mid - 1, x);

	// Else the element can only be present
	// in right subarray
	return binarySearch(arr, mid + 1, r, x);
}

// Returns number of times x occurs in arr[0..n-1]
function countOccurrences(arr, n, x)
{
	var ind = binarySearch(arr, 0, n - 1, x);

	// If element is not present
	if (ind == -1)
		return 0;

	// Count elements on left side.
	var count = 1;
	var left = ind - 1;
	while (left >= 0 && arr[left] == x)
		count++, left--;

	// Count elements on right side.
	var right = ind + 1;
	while (right < n && arr[right] == x)
		count++, right++;

	return count;
}

// Driver code
var arr = [ 0,1,2,2,2,2,2,3,3,4,5,6 ];
var n = arr.length;
var x = 2;
document.write(countOccurrences(arr, n, x));


