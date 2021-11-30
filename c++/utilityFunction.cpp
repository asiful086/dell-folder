 #include <iostream>
 using namespace std;

void printArray(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }

    cout << endl;
}

void revArrRec(int arr[], int start, int end)
{
    if (!(start < end))
    {
        return;
    }
    int temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    revArrRec(arr, start + 1, end - 1);
}