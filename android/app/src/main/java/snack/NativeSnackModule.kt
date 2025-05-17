package snack

import com.facebook.react.bridge.ReactApplicationContext
import com.google.android.material.snackbar.Snackbar
import com.nativeSnackbar.NativeSnackbarSpec

class NativeSnackModule(reactApplicationContext: ReactApplicationContext):NativeSnackbarSpec(reactApplicationContext) {
    override fun getName(): String {
        return super.getName()
    }
    override fun showSnackbar(value: String?) {
        if (value != null) {
            currentActivity?.window?.decorView?.rootView?.let { Snackbar.make(it,value,Snackbar.LENGTH_LONG).show() }
        };
    }
    companion object{
        const val NAME = "NativeSnackbar"

    }
}