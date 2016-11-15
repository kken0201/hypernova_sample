module ApplicationHelper
  def assets_path(path)
    return "http://localhost:4000/#{path}" if Rails.env.development?
    manifest = Rails.application.config.assets_manifest
    path = manifest[path] if manifest && manifest[path].present?
    "/assets/#{path}"
  end
end
