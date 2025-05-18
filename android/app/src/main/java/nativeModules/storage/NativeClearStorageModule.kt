package nativeModules.storage

import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.nativeSnackbar.NativeClearStorageSpec

class NativeClearStorageModule(reactApplicationContext: ReactApplicationContext):NativeClearStorageSpec(reactApplicationContext) {
    override fun clearStorage(): Boolean {
        try {
            Runtime.getRuntime().exec("pm clear "+reactApplicationContext.packageName);
            Toast.makeText(reactApplicationContext,"Cleared",Toast.LENGTH_SHORT).show();
            return true;

        }catch (_:Exception){
            Toast.makeText(reactApplicationContext,"Error",Toast.LENGTH_SHORT).show();

        }
        return false
    }
    companion object{
        var NAME = "NativeClearStorage"
    }

}