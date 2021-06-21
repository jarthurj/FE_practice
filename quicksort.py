def partition(arr, low, high):
	i = low - 1
	pivot = arr[low+(high-low)//2]
	arr[low+(high-low)//2], arr[high] = arr[high], arr[low+(high-low)//2]
	for j in range(low, high):
		if arr[j]<= pivot:
			i += 1
			arr[i], arr[j] = arr[j], arr[i]
	arr[i+1], arr[high] = arr[high], arr[i+1]
	return (i+1)
def quicksort(arr, low, high):
	if len(arr) == 0:
		return arr
	if low < high:
		p = partition(arr, low, high)
		quicksort(arr, low, p-1)
		quicksort(arr, p+1, high)

array = [76,47,2,6,7,12,9,10,2]
quicksort(array, 0, len(array) - 1)
print(array)