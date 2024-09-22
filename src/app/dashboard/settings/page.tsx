import Main_Dashboard from "../main";

function Settings() {
  return (
    <Main_Dashboard>
      <div className="row">
        {/* {{-- Global Settings Row --}} */}
        <div className="col">
          @foreach ($user['sett']['settingsGrouped'] as $group)
          <div className="card shadow mb-4">
            <a
              href="#siteSetting"
              className="card-header py-3 "
              aria-expanded="true"
              data-bs-toggle="collapse"
              role="button"
            >
              <h6 className="m-0 fw-bold text-gray-600">$group-description</h6>
            </a>
            <div className="collapse show" id="siteSetting">
              <div className="card-body">
                <div className="row">
                  {/* @foreach ($group['config'] as $item)
                                @if ($item->type_name == "timezone")
                                    <x-config-timezone
                                        :name="$item->name"
                                        :description="$item->description"
                                        :value="$item->value"/>
                                @elseif($item->type_name == "string")
                                    <x-config-string
                                        :name="$item->name"
                                        :description="$item->description"
                                        :value="$item->value"/>
                                @endif
                            @endforeach */}
                </div>
              </div>
            </div>
          </div>
          @endforeach
        </div>
      </div>
    </Main_Dashboard>
  );
}

export default Settings;
