

/**
 * The following function takes in the search term  and sets the services
 * for our dashboard to use to find the services the user is looking for.
 *
 *
 *
 */

export default function searchService(
  searchTerm: string,
  services: Map<string, string>
): Map<string, string> | void {
    // trim to remove spaces
    
    searchTerm = searchTerm.trim();
  if (searchTerm in [undefined, null, ""]) {
    return services;
  }

  const keys: Array<string> = Array.from(services.keys());

  var updatedServices: Map<string, string> = new Map();

  keys.forEach((key) => {
    if (key.includes(searchTerm) || services.get(key)?.includes(searchTerm)) {
      updatedServices.set(key, services.get(key) ?? `${key} service`);
    }
  });

  if (updatedServices.size > 0) return updatedServices;


}
