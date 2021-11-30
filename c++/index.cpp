#include <bits/stdc++.h>
#include "utilityFunction.cpp"
using namespace std;

pair<int, int> findMinMax(int arr[], int n)
{
    pair<int, int> minMax;

    if (n == 1)
    {
        minMax.first = arr[0];
        minMax.second = arr[0];
        return minMax;
    }

    if (arr[0] < arr[1])
    {

        minMax.first = arr[0];
        minMax.second = arr[1];
    }
    else
    {
        minMax.first = arr[1];
        minMax.second = arr[0];
    }

    for (int i = 2; i < n; i++)
    {
        if (arr[i] < minMax.first)
        {
            minMax.first = arr[i];
        }
        if (arr[i] > minMax.second)
        {
            minMax.second = arr[i];
        }
    }

    return minMax;
}
int findKthSmaller(int arr[], int start, int end)
{

}

int main()
{
    int arr[] = {7, 10, 4, 3, 20, 15, 1, 2};
    int l = sizeof(arr) / sizeof(arr[0]);
    int smaller;
    int i = 0;
    while (i < l - 1)
    {
        if (arr[i] < arr[i + 1])
        {
            smaller = arr[i];
        }
        else
        {
            smaller = arr[i + 1];
        }
        if (arr[i + 2] < smaller)
        {
            smaller = arr[i + 2];
        }
        i += 3;
    }
    cout << "the smaller is " << smaller << endl;
    return 0;
}