import UseMemoExample from "./components/UseMemo/UseMemoExample";
import UseCallbackExample from "./components/UseCallback/UseCallbackExample";
import "./UseMemo_UseCallback.css";
export default function UseMemoAndUseCallback() {
    return (<>
        <h1>useMemo</h1>
        <UseMemoExample/>
        <h1>useCallback</h1>
        <UseCallbackExample/>
    </>);
}