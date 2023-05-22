
function binarySearch(arr, l, r, x)
{
	if (r < l)
		return -1;

	var mid = l + parseInt((r - l) / 2);

	
	if (arr[mid] == x)
		return mid;

	
	if (arr[mid] > x)
		return binarySearch(arr, l, mid - 1, x);

	
	return binarySearch(arr, mid + 1, r, x);
}


function Occurrences(arr, n, x)
{
	var ind = binarySearch(arr, 0, n - 1, x);

	
	if (ind == -1)
		return 0;

	
	var count = 1;
	var left = ind - 1;
	while (left >= 0 && arr[left] == x)
		count++, left--;

	
	var right = ind + 1;
	while (right < n && arr[right] == x)
		count++, right++;

	return count;
}


var arr = [ 0,1,2,2,2,2,2,3,3,4,5,6 ];
var n = arr.length;
var x = 0;
document.write(Occurrences(arr, n, x));


