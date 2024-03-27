public class Soojebi{
    public static int fn(int key, int[] arr, int cnt) {
        int mid;
        int low = 0, high = cnt -1;
        int i=0;

        while(low <= high){
            i++;
            mid = (low + high) / 2;

            if(key == arr[mid]){
                return i;
            }
            else if(key < arr[mid]) {
                high = mid - 1;
            }
            else {
                low = mid+1;
            }
        }
        return -1;
    }

    public static void main(String []args){
        int[] a = {92,100,215,341,625,716,812,813,820,901,902};
        int cnt = fn(92, a, 11);
        System.out.println(cnt);
    }
}