import Toast from 'components/Common/Toast';
import React from 'react';


interface IAlert {
  type: 'success' | 'info',
  message: string,
}
interface IAppAlerts {
  addAlert: (x: IAlert) => void
}

// eslint-disable-next-line no-console
export const AppAlertsCtx = React.createContext<IAppAlerts>({ addAlert: console.log });

export default function AppAlerts({ children }: { children: React.ReactNode}) {
  const [alerts, setAlerts] = React.useState<IAlert[]>([]);
  const val = React.useMemo(() => ({
    addAlert: (alert: IAlert) => { setAlerts((prev) => [...prev, alert]); },
    resetAll: () => { setAlerts([]); },
  }), []);
  return (
    <AppAlertsCtx.Provider value={val}>
      {children}
      {alerts.map((o: IAlert) => <Toast key={o.message} type={o.type} message={o.message} />)}
    </AppAlertsCtx.Provider>
  );
}
