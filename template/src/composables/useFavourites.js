import { ref, watch, computed } from "vue";
import PocketBase from "pocketbase";
import { useAuth } from "@/composables/useAuth";

const pb = new PocketBase("http://127.0.0.1:8090");
const favourites = ref([]);
const loadingFavourites = ref(false);

export function useFavourites() {
  const { currentUser, isAuthenticated } = useAuth();

  // Carica i preferiti dell'utente loggato
  const fetchFavourites = async () => {
    if (!isAuthenticated.value) {
      favourites.value = [];
      return;
    }
    loadingFavourites.value = true;
    try {
      const favs = await pb.collection("favorites").getFullList({
        filter: `user = '${currentUser.value.id}'`,
        expand: "car",
      });
      favourites.value = favs;
    } catch (e) {
      favourites.value = [];
    } finally {
      loadingFavourites.value = false;
    }
  };

  // Aggiungi ai preferiti
  const addFavourite = async (carId) => {
    if (!isAuthenticated.value) return;
    await pb.collection("favorites").create({
      user: currentUser.value.id,
      car: carId,
    });
    await fetchFavourites();
  };

  // Rimuovi dai preferiti
  const removeFavourite = async (carId) => {
    const fav = favourites.value.find(
      (f) =>
        f.car === carId ||
        (f.expand && f.expand.car && f.expand.car.id === carId)
    );
    if (fav) {
      await pb.collection("favorites").delete(fav.id);
      await fetchFavourites();
    }
  };

  // Controlla se una macchina è tra i preferiti
  const isFavourite = (carId) => {
    return favourites.value.some(
      (f) =>
        f.car === carId ||
        (f.expand && f.expand.car && f.expand.car.id === carId)
    );
  };

  // Lista delle auto preferite (espansa)
  const favouriteCars = computed(() =>
    favourites.value
      .filter((f) => f.expand && f.expand.car)
      .map((f) => ({ ...f.expand.car, _favouriteId: f.id }))
  );

  // Aggiorna i preferiti quando cambia utente
  watch([currentUser, isAuthenticated], fetchFavourites, { immediate: true });

  return {
    favourites,
    loadingFavourites,
    fetchFavourites,
    addFavourite,
    removeFavourite,
    isFavourite,
    favouriteCars,
  };
}
