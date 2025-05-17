package snack


import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeSnackbarPackage : BaseReactPackage() {

    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? =
        if (name == NativeSnackModule.NAME) {
            NativeSnackModule(reactContext)
        } else {
            null
        }

    override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
        mapOf(
            NativeSnackModule.NAME to ReactModuleInfo(
                name = NativeSnackModule.NAME,
                className = NativeSnackModule.NAME,
                canOverrideExistingModule = false,
                needsEagerInit = false,
                isCxxModule = false,
                isTurboModule = true
            )
        )
    }
}