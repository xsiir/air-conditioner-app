using Microsoft.AspNetCore.SignalR;

namespace AzureSignalR
{
    internal class AirConditioner : Hub
    {
        public void ChangeStateMessage(AirConditionerState state) {
            Clients.All.SendAsync("ChangeStateMessage", state);
        }
    }
}